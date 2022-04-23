import React from "react";
class FetchFeedback extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/api/feedback/getallfeedbacks")
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
              <th scope="col">FEEDBACK SENT ON</th>
              <th scope="col">MESSAGE</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <>
                <tr>
                  <th scope="row" key={item.id}>
                    {item.user}
                  </th>
                  <td>{item.date}</td>
                  <td>{item.msg}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default FetchFeedback;
