import React from "react";
import "./admin.css";

export default function Admin() {
  return (
    <>
      <div class="filter"></div>

      <table>
        <tr>
          <th>Sno.</th>

          <th>Date</th>

          <th>Username</th>

          <th>Email </th>

          <th>Password</th>

          <th>Edit</th>

          <th>Delete</th>
        </tr>

        <tr>
          <td>1</td>

          <td>1.4.2022</td>

          <td>Bhawna</td>

          <td>bhawna@gmail.com</td>

          <td>bhawna</td>

          <td> </td>

          <td></td>
        </tr>

        <tr>
          <td>2</td>

          <td>1.4.2022</td>

          <td>Akrati</td>

          <td>akrati@gmail.com</td>

          <td>password</td>

          <td></td>
          <td></td>
        </tr>

       
      </table>
    </>
  );
}
