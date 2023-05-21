import React from 'react'

function EditRow() {
  return (
    <tr>
        <td>
            <input type="text" required="required" placeholder="Enter a name..." name="name"></input>
        </td>
        <td>
            <input type="text" required="required" placeholder="Enter DOB..." name="age"></input>
        </td>
        <td>
            <input type="text" required="required" placeholder="Enter a location..." name="location"></input>
        </td>
        <td>
            <input type="text" required="required" placeholder="Enter eligibility..." name="eligibility"></input>
        </td>
        <td>
            <input type="text" required="required" placeholder="Enter minutes..." name="minutes"></input>
        </td>
        <td></td>
    </tr>
  )
}

export default EditRow
