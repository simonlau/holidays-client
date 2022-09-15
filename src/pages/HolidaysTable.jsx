import debug from "debug";
import { useEffect, useState } from "react";
import urlcat from "urlcat";
import { SERVER } from "../utils/constants";

const log = debug("holidays:client:components:HolidaysTable");

function HolidaysTable() {
  const [holidays, setHolidays] = useState([]);
  // const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetchHolidays = async () => {
      const url = urlcat(SERVER, "/holidays");
      const request = await fetch(url);
      const data = await request.json();
      log("data %o", data);
      setHolidays(data);
    };
    fetchHolidays();
  }, []);

  const handleDelete = (id) => async () => {
    log(`Deleting ${id}`);
    const url = urlcat(SERVER, `/holidays/${id}`);
    const res = await fetch(url, { method: "DELETE" });
    const data = await res.json();
    log("data %o", data);
    // setReload(!reload);
    setHolidays(holidays.filter((holiday) => holiday._id !== id));
  };

  return (
    <table>
      <caption>Holidays</caption>
      <thead>
        <tr>
          <th>Title</th>
          <th>Likes</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {holidays.map((holiday) => (
          <tr key={holiday._id}>
            <td>{holiday.title}</td>
            <td>{holiday.likes}</td>
            <td>
              <button>+1</button>
              <button>Edit</button>
              <button onClick={handleDelete(holiday._id)}>Delete</button>
              {holiday._id}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default HolidaysTable;
