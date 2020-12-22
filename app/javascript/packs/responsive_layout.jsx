import { Responsive, WidthProvider } from 'react-grid-layout';
import React from 'react';
import _ from "lodash";
import ReactDOM from 'react-dom';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class ResponsiveLayout extends React.Component {
  static defaultProps = {
    className: "layout",
    rowHeight: 30,
    verticalCompact: true,
    onLayoutChange: function() {},
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    draggableHandle: '.draggable-handle'
  };

  state = {
    currentBreakpoint: "lg",
    compactType: "vertical",
    mounted: false,
    layouts: { lg: generateLayout() }
  };

  componentDidMount() {
    this.setState({ mounted: true });
  }

  // generateDOM() {
  //     const components = [
  //       {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
  //       {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
  //       {i: 'c', x: 4, y: 0, w: 1, h: 2}
  //     ]
  //     return _.map(components, function(componentData, componentIndex) {
  //       return (
  //         <div key={componentIndex} className='react-grid-component'>
  //           {/* <div className='component-react-grid'>{componentData.i}</div> */}
  //         </div>
  //       )
  //     })
  // }

  generateDOM() {
    return _.map(this.state.layouts.lg, function(l, i) {
      return (
        <div key={i}>
          <div className="drag-handle"></div>
          <iframe src="https://kaylee-staging.test-socrata.com/dataset/Blood-Alcohol-UFO-Sightings-with-Panning/qbkr-6ijp/embed?width=inherit" frameBorder="0" style={{height: 'inherit', width: 'inherit', border:'0', padding: '0', margin: '0'}}></iframe>
        </div>
      );
    });
  }

  onBreakpointChange = (breakpoint) => {
    this.setState({
      currentBreakpoint: breakpoint
    });
  };

  render() {
    // eslint-disable-next-line no-unused-vars
    return (
      <div>
        <div>
          Current Breakpoint: {this.state.currentBreakpoint} (
          {this.props.cols[this.state.currentBreakpoint]} columns)
        </div>
        <div>
          Compaction type:{" "}
          {_.capitalize(this.state.compactType) || "No Compaction"}
        </div>

        <ResponsiveReactGridLayout
          {...this.props}
          layouts={this.state.layouts}
          onBreakpointChange={this.onBreakpointChange}
          // WidthProvider option
          measureBeforeMount={true}
          compactType={this.state.compactType}
          preventCollision={!this.state.compactType}
        >
          {this.generateDOM()}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

function generateLayout() {
  return _.map(_.range(0, 3), function(item, i) {
    var y = Math.ceil(Math.random() * 4) + 4;
    return {
      x: Math.round(Math.random() * 5) * 4,
      y: Math.floor(i / 6) * y,
      w: 4,
      h: y,
      i: i.toString(),
      static: false
    };
  });
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ResponsiveLayout name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})