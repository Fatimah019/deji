/**
 * @description Import needed libraries to display data on user page
 * @author By Deji Adebayo
 */
//Begin Import statement
import React, { useEffect } from "react"; //import useEffect from react libraries to fetch data and render it to the page
import { useDispatch, useSelector } from "react-redux"; //import react-redux for managing the state
import { useNavigate } from "react-router-dom"; //import use navigate from react router-dom for navigation purpose
import Button from "../../components/Button"; //Import button component
import CustomTable from "../../components/Table"; //import customable for binding data to the table
import { fetchAllUsers } from "../../store/slices/user"; //End Import statement

/**
 * @description This is Users functional component to display the users from the JsonplaceHolder APi provided
 * this was acheived with the help useEffect from react library
 * @returns CustomTable
 * @param useDispatch, useNavigate
 */
const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state);

  /** Beginning of fetch user data into a table
   * Fetch User data from the jsonplaceholder api and put into a table with the columns specify below
   * */
  useEffect(() => {
    const usersData = async () => {
      await dispatch(fetchAllUsers());
    };
    usersData();
  }, [dispatch]);
  return (
    <>
      <CustomTable
        loading={users?.allUsers?.isLoading}
        tableData={
          users?.allUsers?.users && users?.allUsers?.users?.map((data) => data)
        }
        columnsData={[
          {
            Header: "S/N",
            accessor: "id",
            Cell: (data) => {
              return data?.row?.original?.id;
            },
          },
          {
            Header: "Name",
            accessor: "name",
            Cell: (data) => {
              return data?.row?.original?.name || "--";
            },
          },
          {
            Header: "Email",
            accessor: "email",
            Cell: (data) => {
              return data?.row?.original?.email || "--";
            },
          },
          {
            Header: "Phone",
            accessor: "phone",
            Cell: (data) => {
              return data?.row?.original?.phone || "--";
            },
          },
          {
            Header: "Username",
            accessor: "username",
            Cell: (data) => {
              return data?.row?.original?.username || "--";
            },
          },
          {
            Header: "City",
            accessor: "address.city",
            Cell: (data) => {
              return data?.row?.original?.address?.city || "--";
            },
          },
          {
            Header: "Website",
            accessor: "website",
            Cell: (data) => {
              return (
                (
                  <a href={`https://${data?.row?.original?.website}`}>
                    {data?.row?.original?.website}
                  </a>
                ) || "--"
              );
            },
          },
          {
            Header: "View User",
            accessor: "viewuser",
            Cell: (data) => {
              return (
                <Button
                  primary
                  onClick={() => {
                    navigate(`/users/${data?.row?.original?.id}`, {
                      state: data?.row?.original,
                    });
                  }}
                >
                  View
                </Button>
              );
            },
          },
          {
            Header: "Posts",
            accessor: "postsaction",
            Cell: (data) => {
              return (
                <Button
                  secondary
                  onClick={() =>
                    navigate(`/users/${data?.row?.original?.id}/posts`)
                  }
                >
                  View
                </Button>
              );
            },
          },
          {
            Header: "Albums",
            accessor: "albumsaction",
            Cell: (data) => {
              return (
                <Button
                  onClick={() =>
                    navigate(`/users/${data?.row?.original?.id}/albums`)
                  }
                >
                  View
                </Button>
              );
            },
          },
        ]}
      />
    </>
  );
};
/**
 * End of the user ddta fetch and end of the function
 */
export default Users;
