import classes from "./ResultsTable.module.css";

const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const ResultsTable = (props) => {
  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {/* Penjelasan
            - props.data.map((yearData) = kita mengambil data dari app.js menggunakan props lalu kita akan  
             memanggil data terssebut untuk ditampilkan pada tabel.
            - key={yearData.year} = ini digunakan agar tiap data tahunnya itu unik.
            - kenapa yearData.year kita dapat year itu dari data yang dipush masuk ke dalam array yang ada 
             didalam app.js
            - initialInvestment = darimana datang ini, kita panggil props pada ResultTable yang ada di app.js
            yaitu {userInput["current-savings"]} dipanggil berdasarkan userInput dengan value current-savings
        */}
        {props.data.map((yearData) => (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.savingsEndOfYear)}</td>
            <td>{formatter.format(yearData.yearlyInterest)}</td>
            <td>
              {formatter.format(
                yearData.savingsEndOfYear -
                  props.initialInvestment -
                  yearData.yearlyContribution * yearData.year
              )}
            </td>
            <td>
              {formatter.format(
                props.initialInvestment +
                  yearData.yearlyContribution * yearData.year
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;
