import React, { Component } from 'react';
import RegisterInput from './component/RegisterInput';
import RegisterList from './component/RegisterList';
import { v1 as uuid } from 'uuid';

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    title: '',
    firstName: '',
    lastName: '',
    birthday: '',
    nationality: '',
    citizenID: '',
    gender: '',
    dialcode: '',
    phoneNumber: '',
    passPortNo: '',
    salary: '',
    editItem: false,
    select:false,
  };

  // selectDelete = (id) => {
  //   let idArray = [id];
  //   let idSelected = { idselect: id };
  //   let updateId =[idSelected , ...idArray]
    
  // };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.editItem) {
      const filterItems = this.state.items.filter(
        (item) => item.id !== this.state.id
      );
      this.setState({
        items: filterItems,
      });
      const newItem = {
        id: this.state.id,
        title: this.state.title,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        birthday: e.target.birthday.value,
        nationality: e.target.nationality.value,
        citizenID: e.target.citizenID.value,
        gender: e.target.gender.value,
        dialcode: e.target.dialcode.value,
        phoneNumber: e.target.phoneNumber.value,
        passPortNo: e.target.passPortNo.value,
        salary: e.target.salary.value,
      };
      // const updateItems = [...filterItems, newItem];
      const updateItems = [newItem, ...filterItems];
      this.setState({
        items: updateItems,
        id: uuid(),
        title: '',
        firstName: '',
        lastName: '',
        birthday: '',
        nationality: '',
        citizenID: '',
        gender: '',
        dialcode: '',
        phoneNumber: '',
        passPortNo: '',
        salary: '',
        editItem: false,
        select:false,
      });
    } else {
      const newItem = {
        id: this.state.id,
        title: this.state.title,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        birthday: e.target.birthday.value,
        nationality: e.target.nationality.value,
        citizenID: e.target.citizenID.value,
        gender: e.target.gender.value,
        dialcode: e.target.dialcode.value,
        phoneNumber: e.target.phoneNumber.value,
        passPortNo: e.target.passPortNo.value,
        salary: e.target.salary.value,
      };
      const updateItems = [...this.state.items, newItem];
      this.setState({
        items: updateItems,
        id: uuid(),
        title: '',
        firstName: '',
        lastName: '',
        birthday: '',
        nationality: '',
        citizenID: '',
        gender: '',
        dialcode: '',
        phoneNumber: '',
        passPortNo: '',
        salary: '',
        editItem: false,
        select:false,
      });
    }
  };
  handleChangeDate = (e) => {
    this.setState({
      birthday: e,
    });
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };
  handleEdit = (id) => {
    // const filterItems = this.state.items.filter((item) => item.id !== id);
    const selectItem = this.state.items.find((item) => item.id === id);
    this.setState({
      // items: filterItems,
      id: id,
      title: selectItem.title,
      firstName: selectItem.firstName,
      lastName: selectItem.lastName,
      // birthday: selectItem.birthday,
      nationality: selectItem.nationality,
      citizenID: selectItem.citizenID,
      gender: selectItem.gender,
      dialcode: selectItem.dialcode,
      phoneNumber: selectItem.phoneNumber,
      passPortNo: selectItem.passPortNo,
      salary: selectItem.salary,
      editItem: true,
      select:false,
    });
  };
  handleDelete = (id) => {
    const filterItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filterItems,
    });
  };

  clearData = () => {
    this.setState({
      items: [],
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <RegisterInput
            item={this.state}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            editItem={this.state.editItem}
            handleChangeDate={this.handleChangeDate}
          />
        </div>
        <RegisterList
          items={this.state.items}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          clearData={this.clearData}
          selectDelete={this.selectDelete}
        />
      </div>
    );
  }
}

export default App;
