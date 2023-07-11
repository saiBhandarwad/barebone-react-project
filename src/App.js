import Card from "./components/Card";
import Table from "./components/Table";

function App() {
  const date= new Date().toDateString()

  const th = ["Name", "Budget", "Spend", "Forecast"]
  const th1 = ["Bucket Name", "Current Budget", "Requested Budget", "Requested By", " " ," "]
  const data = [{
    "data": ["ACME Corp", "$ 200,000", "$ 173,762", "$ 205,049"]
  }, {
    "data": ["Raman Inc", "$ 200,000", "$ 124,762", "$ 292,629"]
  }]
  const data2 = [{
    "data": ["Longate", "$ 200,000", "$ 173,762", "$ 205,049"]
  }]
  const data3 = [{
    "data": ["ACME Corp", "$ 200,000", "$ 250,000", "Joe Hilfinger"],
    "buttons":["Approve", "Reject"]
  }]
  return (
    <>
      <div className="w-[70vw] mx-auto mt-10 border border-slate-300 py-4">
          <div className="w-[78%] flex justify-between mx-auto my-4">
            <div className="text-xl font-semibold">Hi, Jenny Moss</div>
            <div className="text-xs">Last scanned on {date}</div>
          </div>
        <div className="flex justify-evenly w-[65%] mx-auto">
          <Card bgColor="#fff" amount="$400,000" msg="Total budget you own" />
          <Card bgColor="#8ebed1" amount="$299,762" msg="Spent month-to-date" />
          <Card bgColor="#acdeab" amount="$2,874,582" msg="Forecasted till month to end" />
        </div>
        <Table th={th} data={data} msg="Buckets you own"/>
        
        <Table th={th1} data={data3} msg="Approvals assigned to you"/>

        <Table th={th} data={data2}msg="Buckets you are member of"/>
      </div>

    </>
  );
}

export default App;
