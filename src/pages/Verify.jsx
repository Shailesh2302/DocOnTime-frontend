import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const Verify = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);

  const success = searchParams.get("success");
  const appointmentId = searchParams.get("appointmentId");

  const { backendUrl, token } = useContext(AppContext);
  const navigate = useNavigate();

  const verifyStripe = async () => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/user/verifyStripe`,
        { success, appointmentId },
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }

      navigate("/my-appointments");
    } catch (error) {
      toast.error("Verification failed. Please try again.");
      console.error(error);
      navigate("/my-appointments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token && appointmentId && success === "true") {
      verifyStripe();
    } else if (token) {
      toast.error("Invalid or missing verification details.");
      navigate("/my-appointments");
    }
  }, [token, appointmentId, success]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-gray-600">
      {loading && (
        <>
          <div className="w-20 h-20 border-4 border-gray-300 border-t-4 border-t-primary rounded-full animate-spin"></div>
          <p>Verifying your payment...</p>
        </>
      )}
    </div>
  );
};

export default Verify;
