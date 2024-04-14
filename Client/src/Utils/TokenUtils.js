const getTokenConfig = () => {
    const token = localStorage.getItem("token");
    if (!token) {
        console.error("Token not found in local storage.");
        return null;
    }
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type":"application/json"
        }
    };
};

export default getTokenConfig;
