import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const userContext = React.createContext();

const UserContext = ({ children }) => {
    const [userLoading, setUserLoading] = useState(true);
    const [userError, setUserError] = useState({ status: false, message: "" });

    // ✅ set initial value to null (not empty object)
    const [user, setUser] = useState(null);

    const handleFetchMe = async () => {
        setUserLoading(true);
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/me`,
                { withCredentials: true }
            );

            setUserError({ status: false, message: "" });

            // ✅ set actual user
            setUser(response?.data?.result);
        } catch (error) {
            setUserError({ status: true, message: error?.message });

            // ✅ set null if not logged in
            setUser(null);
        }
        setUserLoading(false);
    };

    useEffect(() => {
        handleFetchMe();
    }, []);

    const passing = {
        userLoading,
        userError,
        user,
        setUser,          // ✅ export setUser (needed for logout)
        handleFetchMe,
    };

    return (
        <userContext.Provider value={passing}>
            {children}
        </userContext.Provider>
    );
};

const useUserContext = () => useContext(userContext);

export { useUserContext, UserContext };