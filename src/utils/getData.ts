const url = import.meta.env.VITE_API_URL
const token = localStorage.getItem("accessToken");


export async function getAllUniversity() {

        try {
            const response = await fetch(`${url}/api/v1/admin/university`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Failed to fetch universities:", errorData);
                return null;
            }

            const result = await response.json();
            // setUniversities(result.data);
            // setFilteredUniversities(result.data);
            console.log("Universities fetched successfully:", result.data);
            return result.data;
        } catch (error) {
            console.error("Error fetching universities:", error);
            return null;
        }
    }