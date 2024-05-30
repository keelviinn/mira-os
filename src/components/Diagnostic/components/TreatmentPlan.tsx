import Button from "@/components/Button/Button";

export default function TreatmentPlan() {
  return (
    <div className="mb-4">
      <div className="text-lg font-bold cursor-pointer mb-2">
        Treatment Plan
      </div>
      <div className={`mt-4`}>
        <p>
          <strong>Provider Name:</strong> Ozita Cooper, MD{" "}
          <span className="button-text">(Edit)</span>
        </p>
        <form action="">
          <div className="space-y-2 mb-2">
            <textarea
              name="summary"
              id="summary"
              spellCheck={false}
              placeholder="Type Visit Summary"
              className="form-control h-auto"
            ></textarea>
            <textarea
              name="plan"
              id="plan"
              spellCheck={false}
              placeholder="Add Treatment Plan"
              className="form-control h-auto"
            ></textarea>
            <textarea
              name="message"
              id="message"
              spellCheck={false}
              placeholder="Add Patient Message"
              className="form-control h-auto"
            ></textarea>
          </div>

          <div className="mb-4">
            <Button variant="action" type="submit" onClick={() => {}}>
              Finish
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
