/**
 * Created by xinzheng on 3/23/17.
 */

import React from "react";
import Fa from "react-fontawesome";
import {Button, ButtonToolbar, ButtonGroup} from 'react-bootstrap'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell} from "recharts";

//bind redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../../../reducers/action';


class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {


    if (this.props.isCompareMode && this.props.gridNumber1 !== undefined ){
      var data =[
        {name: 'Base Scenario', job:null},
        {name: 'New Scenario', job:null},
      ];
    }
    else{
      var data =[
        {name: 'Baseline Scenario', job:null},
      ];
    }


    data[0].job = this.props.gridNumber;

    if (this.props.isCompareMode && this.props.gridNumber1 !== undefined ){
      data[1].job = this.props.gridNumber1;

    }

    // for test
    // var data = [
    //   {name: 'Base Scenario', job: 150000},
    //   {name: 'New Scenario', job: 200000},
    // ];


    const scale = 'ordinal';
    const tooltipFormatter = (value) => ( value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") );

    return (
      <div >
        <br/>
        <div style={{marginTop: -20}}>
          <h5>Jobs Reachable</h5>
          <BarChart  width={400} height={200} data={data} layout="vertical" >

            <XAxis stroke="black" type="number" domain={[0, 400000]} tickFormatter={tooltipFormatter}/>
            <YAxis dataKey="name" stroke="black" type="category"/>

            <CartesianGrid strokeDasharray="3 3"/>
            {/*<Tooltip/>*/}
            {/*<Legend />*/}

            <Bar dataKey="job" fill="#facd7a" isAnimationActive={false} label layout="vertical" >
              {
                data.map((entry, index) => (
                  <Cell fill={index === 0 ? '#2eadd3' : '#facd7a' } key={`cell-${index}`}/>
                ))
              }
            </Bar>

          </BarChart>


        </div>
        </div>

        );
        }
        }

        function mapStateToProps(state) {
        return {
        gridNumber: state.GridNumberStore.gridNumber,
        gridNumber1: state.GridNumberStore.gridNumber1,

        isCompareMode: state.isCompare.isCompare,
      }
      }

        function mapDispachToProps(dispatch) {
        return bindActionCreators(actionCreators, dispatch);
      }


        export default connect(mapStateToProps, mapDispachToProps)(Graph);
