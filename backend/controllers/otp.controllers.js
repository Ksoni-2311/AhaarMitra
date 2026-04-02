import axios from 'axios'

const AUTHKEY = process.env.MSG91_AUTHKEY;
const TEMPLATE_ID = process.env.MSG91_TEMPLATE_ID;

export const sendOtp = async (req, res) => {
  const { mobile } = req.body;
    console.log(process.env.MSG91_AUTHKEY);
    console.log(process.env.MSG91_TEMPLATE_ID);
    
  if (!mobile || mobile.length !== 10) {
    return res.status(400).json({ success: false, message: 'Enter valid 10-digit mobile number' });
  }

  try {
    const response = await axios({
      method: 'POST',
      url: 'https://control.msg91.com/api/v5/otp',
      headers: {
        'authkey': AUTHKEY,
        'Content-Type': 'application/json'
      },
      data: {
        template_id: TEMPLATE_ID,
        mobile: `91${mobile}`,
        otp_length: 6,
        otp_expiry: 5
      }
    });

    return res.status(200).json({ success: true, data: response.data });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.response?.data || err.message });
  }
};

export const verifyOtp = async (req, res) => {
  const { mobile, otp } = req.body;

  if (!mobile || !otp) {
    return res.status(400).json({ success: false, message: 'Mobile and OTP are required' });
  }

  try {
    const response = await axios({
      method: 'GET',
      url: 'https://control.msg91.com/api/v5/otp/verify',
      headers: { 'authkey': AUTHKEY },
      params: { mobile: `91${mobile}`, otp }
    });

    if (response.data.type === 'success') {
      return res.status(200).json({ success: true, message: 'OTP Verified!' });
    } else {
      return res.status(400).json({ success: false, message: 'Invalid OTP' });
    }
  } catch (err) {
    return res.status(500).json({ success: false, error: err.response?.data || err.message });
  }
};

export const resendOtp = async (req, res) => {
  const { mobile } = req.body;

  if (!mobile || mobile.length !== 10) {
    return res.status(400).json({ success: false, message: 'Enter valid 10-digit mobile number' });
  }

  try {
    const response = await axios({
      method: 'GET',
      url: 'https://control.msg91.com/api/v5/otp/retry',
      headers: { 'authkey': AUTHKEY },
      params: { mobile: `91${mobile}`, retrytype: 'text' }
    });

    return res.status(200).json({ success: true, data: response.data });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.response?.data || err.message });
  }
};

