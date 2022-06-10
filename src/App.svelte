<script lang="ts">
  import "carbon-components-svelte/css/g10.css";

  import Label from "./components/Label.svelte";

  let ageStr = "3";
  $: age = convertFromAgeString(ageStr);

  let valStr = "10,000";
  $: val = convertFromPriceString(valStr);

  $: histValues = getHistoricalValues(age, val);
  $: currentValue = histValues[histValues.length - 1] ?? val;

  function convertFromAgeString(str: string): number {
    // Remove all...
    const processed = str
      .replaceAll(/\s/g, "") // whitespace
      .replaceAll(/\D/g, "") // non-digits
      .replaceAll(/\W/g, ""); // symbols

    return Number(processed);
  }

  function convertFromPriceString(str: string): number {
    const processed = str
      .replace("$", "")
      .replaceAll("_", "")
      .replaceAll(",", "");

    return Number(processed);
  }

  function convertToPriceString(num: number): string {
    let str = String(num);
    let retVal = [];

    // Get index to slice into wholes and decimal numbers
    let deciPointInd = str.indexOf(".");
    if (deciPointInd === -1) {
      deciPointInd = Infinity;
    }

    let wholes = str.slice(0, deciPointInd).split("");
    // Insert commas after every third number
    wholes.reverse().forEach((s, i) => {
      if (i % 3 === 0 && i > 0) {
        retVal.unshift(",");
      }
      retVal.unshift(s);
    });

    let decis = str.slice(deciPointInd, deciPointInd + 3);
    // Add a zero if there is only one decimal place
    if (decis.length == 2) {
      decis = `${decis}0`;
    }

    return `$${retVal.join("") + decis}`;
  }

  function getHistoricalValues(years: number, originalValue: number): number[] {
    let newVal = originalValue * 0.8;
    let vals = [originalValue, newVal];
    for (let i = 1; i < years; i++) {
      newVal *= 0.9;
      vals.push(newVal);
    }

    return vals;
  }
</script>

<main>
  <!--Header-->
  <section>
    <h1>Vehicle Value Evaluator</h1>
  </section>

  <!--Inputs-->
  <section>
    <Label>Vehicle Age (in years)</Label>
    <input bind:value={ageStr} />

    <Label>Vehicle Value (when new)</Label>
    <input bind:value={valStr} />
  </section>

  <!--Outputs-->
  <section>
    <Label>Current Value:</Label>
    <p class="value-display">{convertToPriceString(currentValue)}</p>

    <Label>Historical Values:</Label>
    <table>
      <thead>
        <tr>
          <th><strong>Age</strong></th>
          <th><strong>Value</strong></th>
        </tr>
      </thead>
      <tbody>
        {#each histValues as v, i}
          <tr>
            {#if i === 0}
              <td class="label">Original</td>
            {:else}
              <td class="label">{i}</td>
            {/if}
            <td class="value">{convertToPriceString(v)}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </section>

  <!--Description-->
  <section>
    <p class="info">
      Prices are computed by reducing the original value by <strong>20%</strong>
      for the first year then reducing by <strong>10%</strong> every other year
    </p>
  </section>
</main>

<style lang="scss">
  $numeric-font-size: 1.5em;

  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    text-align: center;
    margin: 0 auto;
  }

  section {
    margin-top: 25px;
    margin-bottom: 40px;
  }

  input {
    height: 1.75em;
    font-size: 1.5em;
    text-align: center;

    border: 0;
    border-bottom: 1px solid gray;
  }

  @media only screen and (max-width: 400px) {
    input {
      width: 90%;
    }
  }
  @media only screen and (max-width: 600px) {
    input {
      width: 60%;
    }
  }
  @media only screen and (max-width: 900px) {
    input {
      width: 60%;
    }
  }
  @media only screen and (min-width: 901px) {
    input {
      width: 30%;
    }
  }

  p.value-display {
    font-size: $numeric-font-size;
  }

  table {
    margin-left: auto;
    margin-right: auto;

    border-top: 1px solid gray;
    border-bottom: 1px solid gray;

    gap: 0px;
    row-gap: 0px;
    column-gap: 0px;
  }

  th,
  td {
    padding: 5px 10px;
  }

  tbody tr:nth-child(2n - 1) td {
    background-color: lightgray;
  }

  .info {
    margin-left: 30px;
    margin-right: 30px;
  }
</style>
