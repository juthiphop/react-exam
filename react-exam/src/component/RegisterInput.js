import React, { Component } from 'react';
import { CountryList } from '../data';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class RegisterInput extends Component {
  stateCountry = {
    data: CountryList,
  };

  render() {
    const {
      handleSubmit,
      item,
      handleChange,
      editItem,
      handleChangeDate,
    } = this.props;
    const { data } = this.stateCountry;
    return (
      <div className="card card-body my-3 container">
        <form className="form-group" onSubmit={handleSubmit}>
          <div className="form-row col-12 mx-5 my-5">
            <label className="col-form-label">
              Title : <span className="text-danger">*</span>
            </label>
            <div className="col-sm-2">
              <select
                className="form-control"
                id="title"
                name="title"
                onChange={handleChange}
              >
                <option value={item.title}>{item.title}</option>
                <option value="Mr.">Mr.</option>
                <option value="Ms.">Ms.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <label className="col-form-label">
              First Name : <span className="text-danger">*</span>
            </label>
            <div className="col-sm-3">
              <input
                type="text"
                className="form-control"
                value={item.firstName}
                name="firstName"
                id="firstName"
                onChange={handleChange}
                placeholder="First Name"
              />
            </div>
            <label className="col-form-label">
              Last Name : <span className="text-danger">*</span>
            </label>
            <div className="col-sm-3">
              <input
                type="text"
                className="form-control"
                value={item.lastName}
                name="lastName"
                id="lastName"
                onChange={handleChange}
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="form-row col-12 mx-5 my-3">
            <label className="col-form-label">
              Birthday : <span className="text-danger">*</span>
            </label>
            <div className="col-sm-3">
              <DatePicker
                selected={item.birthday}
                onChange={handleChangeDate}
                name="birthday"
                id="birthday"
              />
            </div>
            <label className="col-form-label">Nationality :</label>
            <div className="col-sm-5">
              <select
                className="form-control"
                id="nationality"
                name="nationality"
                onChange={handleChange}
              >
                <option value={item.nationality}>{item.nationality}</option>
                {data.map((data) => (
                  <option key={data.id} value={data.name}>
                    {data.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-row col-12 mx-5 my-3">
            <label className="col-form-label">CitizenID :</label>
            <div className="col-sm-3">
              <input
                type="text"
                className="form-control"
                value={item.citizenID}
                name="citizenID"
                id="citizenID"
                onChange={handleChange}
                placeholder="CitizenID"
              />
            </div>
          </div>
          <div className="form-row col-12 mx-5 my-3">
            <label className="col-form-label">Gender : </label>
            <div className="col-sm-3 my-2">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  onChange={handleChange}
                  value="Male"
                />
                <label className="form-check-label">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  onChange={handleChange}
                  value="Female"
                />
                <label className="form-check-label">Female</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="unisex"
                  onChange={handleChange}
                  value="Unisex"
                />
                <label className="form-check-label">Unisex</label>
              </div>
            </div>
          </div>
          <div className="form-row col-12 mx-5 my-3">
            <label className="col-form-label">
              Mobile Phone : <span className="text-danger">*</span>
            </label>
            <div className="col-sm-2">
              <select
                className="form-control"
                id="dialcode"
                name="dialcode"
                onChange={handleChange}
              >
                <option value={item.dialcode}>{item.dialcode}</option>
                {data.map((data) => (
                  <option key={data.id}>{data.dialCode}</option>
                ))}
              </select>
            </div>
            <label className="col-form-label">-</label>
            <div className="col-sm-3">
              <input
                type="number"
                className="form-control"
                id="phoneNumber"
                placeholder="Phone Number"
                name="phoneNumber"
                onChange={handleChange}
                value={item.phoneNumber}
              />
            </div>
          </div>
          <div className="form-row col-12 mx-5 my-3">
            <label className="col-form-label">
              Passport No : <span className="text-danger">*</span>
            </label>
            <div className="col-sm-3">
              <input
                type="text"
                className="form-control"
                id="passPortNo"
                placeholder="Passport No."
                name="passPortNo"
                onChange={handleChange}
                value={item.passPortNo}
              />
            </div>
          </div>
          <div className="form-row col-12 mx-5 my-3">
            <label className="col-form-label">
              Expected Salary : <span className="text-danger">*</span>
            </label>
            <div className="col-sm-3">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">฿</span>
                </div>
                <input
                  type="number"
                  className="number-separator form-control"
                  aria-label="Amount (to the nearest bath)"
                  id="salary"
                  placeholder="Expected Salary"
                  name="salary"
                  onChange={handleChange}
                  value={item.salary}
                />
                <div className="input-group-append">
                  <span className="input-group-text">THB</span>
                </div>
              </div>
            </div>
            <div className="col-sm-5"></div>
            <div className="col-sm-1">
              <button
                className={editItem ? 'btn btn-warning' : 'btn btn-success'}
                disabled={item.firstName ? false : true}
              >
                {editItem ? 'แก้ไข' : 'บันทึก'}
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
