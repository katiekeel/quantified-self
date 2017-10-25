import React, { Component } from 'react';

export default class FoodComponent extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.food.name}</td>
        <td>{this.props.food.calories}</td>
      </tr>
    )
  }
}
