import React from "react";
class FetchUsers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/api/users/fetchallusers")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait for some time.... </h1>{" "}
        </div>
      );

    const i = 0;
    return (
      <>
        <table class="table table-striped my-4">
          <thead>
            <tr>
              <th scope="col">USER ID</th>
              <th scope="col">REGISTERED ON</th>
              <th scope="col">USER NAME</th>
              <th scope="col">EMAIL ID</th>
              <th scope="col">EDIT</th>
              <th scope="col">DELETE</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <>
                <tr>
                  <th scope="row" key={item.id}>
                    {item._id}
                  </th>
                  <td>{item.date}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>
                    <i className="fas fa-trash-alt mx-3"></i>
                  </td>
                  <td>
                    <i className="fas fa-edit"></i>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default FetchUsers;
