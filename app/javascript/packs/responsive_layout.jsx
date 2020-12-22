import { Responsive, WidthProvider } from 'react-grid-layout';
import React from 'react';
import _ from "lodash";
import ReactDOM from 'react-dom';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class ResponsiveLayout extends React.Component {
  static defaultProps = {
    className: "layout",
    rowHeight: 30,
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    draggableHandle: '.drag-handle',
    verticalCompact: false
  };

  state = {
    currentBreakpoint: "lg",
    mounted: false,
    layouts: { lg: generateLayout() }
  };

  componentDidMount() {
    this.setState({ mounted: true });
  }

  generateDOM() {
    return _.map(this.state.layouts.lg, function(item, i) {
      return (
        <div key={i}>
          <div className="drag-handle"></div>
          {item.src && <iframe src={item.src} width="429" height="350" style={{border: 0, padding: 0, margin: 0}}></iframe>}
          {item.text && <div dangerouslySetInnerHTML={{ __html: item.text }}></div>}
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
    return (
      <div>
        <ResponsiveReactGridLayout
          {...this.props}
          layouts={this.state.layouts}
          onBreakpointChange={this.onBreakpointChange}
          // WidthProvider option
          measureBeforeMount={true}
          verticalCompact={this.props.compactType == 'vertical'}
        >
          {this.generateDOM()}
        </ResponsiveReactGridLayout>
        <div>
          Current Breakpoint: {this.state.currentBreakpoint} (
          {this.props.cols[this.state.currentBreakpoint]} columns)
        </div>
        <div>
          Compaction type:{" "}
          {this.props.compactType === 'vertical' ? "Vertical" : "No Compaction"}
        </div>
      </div>
    );
  }
}

function generateLayout() {
  const layout = [
    { i: '0',text: '<h1 class=title>Your Great Story Title</h1>', x: 3, y: 0, h: 3, w: 6},
    { i: '1',src: 'https://kaylee-staging.test-socrata.com/dataset/Annotations/29z7-rtcv/embed?width=898&height=350', x: 0,y: 3,h: 9,w: 8},
    { i: '2',text: '<div class=paragraph><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</i>' , x: 8,y: 3,h: 9,w: 4},
    { i: '3',src: 'https://kaylee-staging.test-socrata.com/dataset/Combo-Chart-States-Cases/hxgh-e68h/embed?width=445&height=350', x: 0,y: 12,h: 9,w: 4},
    { i: '4', src: 'https://kaylee-staging.test-socrata.com/dataset/Timeline-Chart-States-Cases/9e9t-tiqm/embed?width=899&height=350', x: 4,y: 12,h: 9,w: 8},
    { i: '5',text: '<div class=paragraph><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</i>', x: 0,y: 21,h: 9,w: 4},
    { i: '6', src: 'https://kaylee-staging.test-socrata.com/dataset/Pie-Chart-With-Title-Description/r6h2-k5th/embed?width=445&height=350', x: 4,y: 21,h: 9,w: 4},
    { i: '7',text: '<div class=paragraph><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</i>', x: 8,y: 21,h: 9,w: 4},
    { i: '8',src: 'https://kaylee-staging.test-socrata.com/dataset/Column-Chart-States-Cases/8uic-976j/embed?width=899&height=390', x: 0,y: 30,h: 10,w: 8},
    { i: '9', src: 'https://kaylee-staging.test-socrata.com/dataset/Combo-Chart-States-Cases/hxgh-e68h/embed?width=899&height=390', x: 0,y: 40,h: 10,w: 8}
  ];
  return layout
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ResponsiveLayout name="React" compactType={document.getElementById('story-container').className}/>,
    document.getElementById('story-container'),
  )
})