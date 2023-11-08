import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const deleteSong = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const deleteSong = async () => {
            try {
        const response = await fetch(`https://localhost:3000/songs/${id}`, {
            method: "DELETE",
        });
            if (response.status === 200) {
                navigate("/songs");
            } else {
                console.error("Failed to delete song");
            }
        } catch(error) {
            console.error("Failed to delete song", error);
        }
    };
    deleteSong();
}, [id, navigate]);
};    

export default deleteSong;