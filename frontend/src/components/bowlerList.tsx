import { useState, useEffect } from "react";
import { bowler } from "../types/bowler";
import { team } from "../types/team";

function BowlerList() {
  const [bowlerList, setBowlerList] = useState<bowler[]>([]);
  const [teamList, setTeamList] = useState<team[]>([]);

  useEffect(() => {
    const fetchBowlers = async () => {
      const response = await fetch("https://localhost:5000/Bowlers");
      const data = await response.json();
      setBowlerList(data);
    };
    fetchBowlers();
  }, []);

  useEffect(() => {
    const fetchBowlers = async () => {
      const response = await fetch("https://localhost:5000/Teams");
      const data = await response.json();
      setTeamList(data);
    };
    fetchBowlers();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
          </tr>
        </thead>
        <tbody>
          {bowlerList
            .filter((x) => {
              const team = teamList.find((team) => team.teamId === x.teamId);
              return (
                team?.teamName === "Marlins" || team?.teamName === "Sharks"
              );
            })
            .map((x) => (
              <tr key={x.bowlerID}>
                <td>
                  {x.bowlerFirstName} {x.bowlerMiddleInit}. {x.bowlerLastName}
                </td>
                <td>
                  {teamList.find((team) => team.teamId === x.teamId)
                    ?.teamName || "No Team"}
                </td>
                <td>{x.bowlerPhoneNumber}</td>
                <td>{x.bowlerAddress}</td>
                <td>{x.bowlerCity}</td>
                <td>{x.bowlerState}</td>
                <td>{x.bowlerZip}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
