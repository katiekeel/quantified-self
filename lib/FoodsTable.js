import React, {Component} from 'react';
import axios from 'axios'

import FoodComponent from './FoodComponent';

export default class FoodsTable extends Component {

  constructor(props) {
    super(props);
    this.state = {foods: []}
  }

  componentDidMount() {
    axios.get('https://quantified-api.herokuapp.com/v1/foods')
    .then((response) => {
      console.log(response)
      this.setState({foods: response.data})
    })
    .catch((error) => {
      console.error(error)
    })
  }

  render() {
    const foodList = this.state.foods && this.state.foods.map((food) => {
      return <FoodComponent key={food} food={food}/>
    })

    return (
      <table className="food-table" id='food-table'>
        <thead>
          <tr className='food-table-headers'>
            <th className="cell-one food-tbl-name-header">Name</th>
            <th className="food-tbl-cal-header">Calories</th>
          </tr>
        </thead>
        <tbody>
          {foodList}
        </tbody>
      </table>
    )
  }
}
