import axios from "axios";

const KEY = "wxrpq43xeg2gl8y11";

const BASE_URL = "https://techhk.aoscdn.com/";

export const enhancedImageAPI = async (file) => {
  try {
    const taskId = await uploadImage(file);
    console.log("Image Uploaded Successfully, Task ID :", taskId);

    const enhancedData = await pollForEnhancedImage(taskId);
    console.log("Enhanced Image Data:", enhancedData);
    return enhancedData;
  } catch (error) {
    console.log("Error ehnacing image :", error.message);
  }
};

const uploadImage = async (file) => {
  //code to upload

  const formData = new FormData();
  formData.append("image_file", file);

  const { data } = await axios.post(
    `${BASE_URL}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": KEY,
      },
    }
  );

  if (!data?.data?.task_id) {
    throw new Error("Failed to upload image..! Task ID not found.");
  }

  return data.data.task_id;
};
const fetchEnhancedImage = async (taskId) => {
  //code to enhanced or fetch api
  const { data } = await axios.get(
    `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
    {
      headers: {
        "X-API-KEY": KEY,
      },
    }
  );

  if (!data?.data) {
    throw new Error("Failed to fetch Enhanced image..! Image not found.");
  }
  return data.data;
};

const pollForEnhancedImage = async (taskId, retries = 0) => {
  const result = await fetchEnhancedImage(taskId);

  if (result.state === 4) {
    console.log("Processing....");

    if (retries >= 20) {
      throw new Error("Maximum retries reached. Please try agaain later.");
    }

    //wait 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return pollForEnhancedImage(taskId, retries + 1);
  }
  console.log("Enhanced Image URL :", result);
  return result;
};
