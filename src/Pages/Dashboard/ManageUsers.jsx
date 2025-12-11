import useRole from "../../Hooks/useRole";
import AdminUsers from "./AdminUsers";

const ManageUsers = () => {
      
    const {role} = useRole()

   

    return (
        <div>
            {role === 'Admin' && <AdminUsers/>}
        </div>
    );
};

export default ManageUsers;