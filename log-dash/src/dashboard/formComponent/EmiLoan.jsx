import React from 'react';
import { Table } from 'evergreen-ui';

function fixedFloat(nbr, toFixed = 2) {
  return parseFloat(nbr.toFixed(toFixed));
}

// a / {[(1 + i) ^n] - 1} / [i(1 + i)^n]
// ia / [1 − (1+i)^-n]
function calculateRepaymentAmount(a, n, i) {
  // return a / (((1 + i) ** n - 1) / (i * (1 + i) ** n));
  return (i * a) / (1 - (1 + i) ** -n);
}

function Amortization( loanAmount, remainingTerm, interestRate) {

  if (!loanAmount || !remainingTerm || !interestRate) {
    return null;
  }

  const rows = Math.ceil(remainingTerm * 12);
  const repaymentAmount = fixedFloat(
    calculateRepaymentAmount(
      loanAmount,
      remainingTerm * 12,
      interestRate / 100 / 12
    )
  );

  let balance = loanAmount;

  return (
    <Table>
      <Table.Head>
        <Table.TextHeaderCell>Payment #</Table.TextHeaderCell>
        {/* <Table.TextHeaderCell>Previous</Table.TextHeaderCell> */}
        <Table.TextHeaderCell>Balance</Table.TextHeaderCell>
        <Table.TextHeaderCell>Monthly Repayment</Table.TextHeaderCell>
        <Table.TextHeaderCell>Principal</Table.TextHeaderCell>
        <Table.TextHeaderCell>Interest</Table.TextHeaderCell>
      </Table.Head>
      <Table.Body>
        {!isNaN(rows) &&
          [...new Array(rows)].map((__, index) => {
            // const prev = balance;
            const interest = fixedFloat((balance * interestRate) / 100 / 12);
            const principal = fixedFloat(repaymentAmount - interest);

            balance = fixedFloat(balance - principal);

            return (
              <Table.Row key={index}>
                <Table.TextCell>{index + 1}</Table.TextCell>
                {/* <Table.TextCell>{prev}</Table.TextCell> */}
                <Table.TextCell>{balance}</Table.TextCell>
                <Table.TextCell>{repaymentAmount}</Table.TextCell>
                <Table.TextCell>{principal}</Table.TextCell>
                <Table.TextCell>{interest}</Table.TextCell>
              </Table.Row>
            );
          })}
      </Table.Body>
    </Table>
  );
}

export default Amortization;
