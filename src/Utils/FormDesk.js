import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Modal } from "@material-ui/core";
import cross from "../Photos/Shape.svg";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexFlow: "column",
    backgroundColor: "white",
    width: "400px",
    margin: "auto",
    alignItems: "center",
    borderRadius: "3px",
    outline: "none",
  },
  textField: {
    margin: "auto",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: "80%",
    outline: "none",
  },
  p: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "20px",
    textAlign: "center",
    color: "red",
  },
  formControl: {
    margin: theme.spacing(1),
    width: "80%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  alignbtn: {
    marginTop: theme.spacing(1),
  },
  bold: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: " 134.77%",
    textAlign: "center",
    textTransform: "uppercase",
    color: "#979797",
    margin: "0",
    padding: "15px 0",
  },
  text: {
    display: "flex",
  },
  head: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: " 134.77%",
    textAlign: "center",
    color: "#092f57",
  },
  tel: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: " 134.77%",
    textAlign: "center",
    marginLeft: "5px",
    whiteSpace: "nowrap",
  },
  title: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "24px",
    lineHeight: "33px",
    textAlign: "center",
    color: "#092f57",
    margin: "0",
    whiteSpace: "nowrap",
  },
  para: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "20px",
    textAlign: "center",
    color: "#989cac",
  },
  icon: {
    width: "97%",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
  },
  iconimg: {
    cursor: "pointer",
  },
  modal: {
    width: "100%",
    height: "fit-content",
    display: "flex",
    position: "relative",
    zIndex: "9999",
    margin: "auto",
    outline: "none",
  },
}));

const Form = ({ setOpen, open }) => {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [emailID, setEmailID] = useState("");
  const [sel, setSel] = useState("");
  const [date, setDate] = useState(new Date());
  const [nameInvalid, setNameInvalid] = useState(false);
  const [phoneNoInvalid, setPhoneNoInvalid] = useState(false);
  const [emailIDInvalid, setEmailIDInvalid] = useState(false);
  const [selInvalid, setSelInvalid] = useState(false);
  const [validity, setValidity] = useState(false);
  const [form, setForm] = useState({});
  const [formEmpty, setFormEmpty] = useState(false);

  const classes = useStyles();

  const selectedOpts = [
    {
      value: "blue",
      label: "test and packages",
    },
    {
      value: "green",
      label: "green",
    },
    {
      value: "violet",
      label: "violet",
    },
    {
      value: "red",
      label: "red",
    },
  ];

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        setNameInvalid(!e.target.validity.valid);
        break;
      case "phoneNo":
        setPhoneNo(e.target.value);
        setPhoneNoInvalid(!e.target.validity.valid);
        break;
      case "emailID":
        setEmailID(e.target.value);
        setEmailIDInvalid(!e.target.validity.valid);
        break;
      case "sel":
        setSel(e.target.value);
        setSelInvalid(!e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).every((each) => each === "")) {
      setFormEmpty(true);
      setValidity(false);
    } else {
      setFormEmpty(false);
    }

    if (!(nameInvalid || phoneNoInvalid || emailIDInvalid || selInvalid)) {
      setValidity(true);
      setForm({
        name: name.charAt(0).toUpperCase() + name.slice(1),
        phoneNo: phoneNo,
        emailID: emailID,
        sel: sel,
        date: date,
      });
    } else {
      setValidity(false);
    }
  };

  React.useEffect(() => {
    if (validity) {
      console.log(form);
    }
  }, [form, validity]);

  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <form
        className={classes.container}
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <div className={classes.icon}>
          <div></div>
          <div></div>
          <img
            loading="lazy"
            className={classes.iconimg}
            src={cross}
            alt="cross"
            onClick={() => {
              setOpen(false);
            }}
          />
        </div>
        <h2 className={classes.title}>BOOK AN APPOINTMENT</h2>
        <p className={classes.para}>by filling in your details </p>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          className={classes.textField}
          name="name"
          value={name}
          onChange={handleChange}
          inputProps={{ pattern: "^([A-Za-z ,.'`-]{2,30})$" }}
          type="text"
          required
        />
        {nameInvalid ? (
          <p className={classes.p}>Please provide a valid name</p>
        ) : (
          ""
        )}
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="emailID"
          className={classes.textField}
          value={emailID}
          onChange={handleChange}
          inputProps={{
            pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
          }}
          type="email"
          required
        />
        {emailIDInvalid ? (
          <p className={classes.p}>Please provide a valid email</p>
        ) : (
          ""
        )}
        <TextField
          id="outlined-basic"
          label="Phone No."
          variant="outlined"
          className={classes.textField}
          name="phoneNo"
          value={phoneNo}
          onChange={handleChange}
          inputProps={{
            pattern: "^[0-9]{10}$",
          }}
          type="tel"
          required
        />
        {phoneNoInvalid ? (
          <p className={classes.p}>Please provide a valid mobile number</p>
        ) : (
          ""
        )}
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Select a Test/Package
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={sel}
            onChange={handleChange}
            label="Select a Test/Package"
            name="sel"
          >
            {selectedOpts.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </FormControl>
        {selInvalid ? (
          <p className={classes.p}>Please provide a selected package</p>
        ) : (
          ""
        )}
        {/* <TextField
          id="datetime-local"
          type="datetime-local"
          label="Select Date & Time"
          className={classes.textField}
          value={date}
          name="date"
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        /> */}
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            disablePast={true}
            label={`Select Date & Time`}
            inputVariant="outlined"
            className={classes.textField}
            minDate={date}
            format="E, dd MMM"
            value={date}
            onChange={setDate}
            animateYearScrolling
          />
        </MuiPickersUtilsProvider>
        <div className={classes.alignbtn}>
          <button type="submit" className="button">
            Submit
          </button>
        </div>
        {formEmpty ? <p className={classes.p}>Please fill in the form</p> : ""}
        <h1 className={classes.bold}>OR</h1>
        <div className={classes.text}>
          <h4 className={classes.head}>Call us on:</h4>
          <a href="tel:+91 98765 09876" className={classes.tel}>
            +91 98765 09876
          </a>
        </div>
      </form>
    </Modal>
  );
};

export default Form;
