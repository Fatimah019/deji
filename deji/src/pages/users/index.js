import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
                <button
                  onClick={() => {
                    navigate(`/users/${data?.row?.original?.id}`, {
                      state: data?.row?.original,
                    });
                  }}
                >
                  View
                </button>
              );
            },
          },
          {
            Header: "Posts",
            accessor: "postsaction",
            Cell: (data) => {
              return (
                <button
                  onClick={() =>
                    navigate(`/users/${data?.row?.original?.id}/posts`)
                  }
                >
                  View
                </button>
              );
            },
          },
          {
            Header: "Albums",
            accessor: "albumsaction",
            Cell: (data) => {
              return (
                <button
                  onClick={() =>
                    navigate(`/users/${data?.row?.original?.id}/albums`)
                  }
                >
                  View
                </button>
              );
            },
          },
        ]}
      />
    </>
  );
};

export default Users;
