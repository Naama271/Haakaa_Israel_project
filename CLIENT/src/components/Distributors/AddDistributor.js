function AddDistributor() {
  const onSubmit = () => {
    alert("נשלח בהצלחה");
  };

  return (
    <tfoot>
      {/* <form onSubmit={onSubmit}> */}
        <tr>
          <th>הוספת מפיצה חדשה</th>
        </tr>
        <tr>
          <th>
            <input type="text" placeholder="שם המפיצה" />
          </th>
          <th>
            <input type="text" placeholder="תפקיד מפיצה" />
          </th>
        </tr>
        <tr>
          <th>
            <input type="text" placeholder="עיר/ איזור" />
          </th>
          <th>
            <input type="text" placeholder="מספר פלאפון" />
          </th>
          <th>
            <select>
              <option value="0">בחרי איזור</option>
              <option value="north">צפון</option>
              <option value="center">מרכז</option>
              <option value="south">דרום</option>
            </select>
          </th>
        </tr>
        <tr>
         <th> <button type="submit" onClick={onSubmit}>שמירה</button> </th>
        </tr>
      {/* </form> */}
    </tfoot>
  );
}

export default AddDistributor;
