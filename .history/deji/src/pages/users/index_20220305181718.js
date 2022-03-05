/**
 * @description Import needed libraries to display data on user page
 * @author By Deji Adebayo
 */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import CustomTable from "../../components/Table";
import { fetchAllUsers } from "../../store/slices/user";

const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state);

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

export default Users;
