const BASE_URL = "http://localhost:8080/api/vendor";

const getToken = () => localStorage.getItem("token");

export const getServiceConfig = async () => {
  const res = await fetch(`${BASE_URL}/service-config`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch service config");
  }

  return data;
};

export const saveServiceConfig = async (payload) => {
  const res = await fetch(`${BASE_URL}/service-config`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to save service config");
  }

  return data;
};

export const savePricingVariants = async (pricingVariants) => {
  const res = await fetch(`${BASE_URL}/service-config/pricing`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({ pricingVariants }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to update pricing");
  }

  return data;
};

export const saveWeeklyMenu = async (weeklyMenu) => {
  const res = await fetch(`${BASE_URL}/service-config/weekly-menu`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({ weeklyMenu }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to update weekly menu");
  }

  return data;
};