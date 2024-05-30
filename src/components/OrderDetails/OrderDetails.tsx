import Card from "@/components/Card/Card";

export default function OrderDetails() {
  return (
    <Card title="Order Details">
      <div className="flex flex-wrap -mx-4">
        <div className="col col-md-6">
          <p>
            <strong>Status:</strong> Reviewing{" "}
            <span className="button-text">(Edit)</span>
          </p>
          <p>
            <strong>Member:</strong> ryan.bruns
          </p>
          <p>
            <strong>Date of Birth:</strong> 01/01/1980
          </p>
          <p>
            <strong>Request Address:</strong> 98 St Marks Pl, New York, NY
          </p>
        </div>
        <div className="col col-md-6">
          <p>
            <strong>Received:</strong> 01/11/2022
          </p>
          <p>
            <strong>Intended Date:</strong> 01/12/2022{" "}
            <span className="button-text">(Edit)</span>
          </p>
          <p>
            <strong>Requested Time of Day:</strong> Morning{" "}
            <span className="button-text">(Edit)</span>
          </p>
          <p>
            <strong>Assigned Agent:</strong> Ryan Bruns
          </p>
          <p>
            <strong>Time Zone:</strong> EDT
          </p>
        </div>
      </div>
    </Card>
  );
}
