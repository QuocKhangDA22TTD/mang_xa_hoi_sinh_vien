// src/api/auth.js

export const loginUser = async (email, password) => {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Lỗi không xác định');
    }

    return data; 
  } catch (error) {
    throw error; // Cho component xử lý lỗi
  }
};
