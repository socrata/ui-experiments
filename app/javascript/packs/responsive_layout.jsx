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
    draggableHandle: '.drag-handle'
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

  generateDOM() {
    return _.map(this.state.layouts.lg, function(l, i) {
      return (
        <div key={i}>
          <div className="drag-handle"></div>
          {l.src && <iframe src={l.src} width="429" height="350" style={{border: 0, padding: 0, margin: 0}}></iframe>}
          {l.text && <div dangerouslySetInnerHTML={{ __html: l.text }}></div>}
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
  const VISUALITZATIONS = [
    { src: 'https://kaylee-staging.test-socrata.com/dataset/Combo-Chart-States-Cases/hxgh-e68h/embed?width=429&height=350'},
    { src: 'https://kaylee-staging.test-socrata.com/dataset/Pie-Chart-With-Title-Description/r6h2-k5th/embed?width=429&height=350'},
    { src: 'https://kaylee-staging.test-socrata.com/dataset/Timeline-Chart-States-Cases/9e9t-tiqm/embed?width=429&height=350'},
    { src: 'https://kaylee-staging.test-socrata.com/dataset/Combo-Chart-States-Cases/hxgh-e68h/embed?width=429&height=350'},
    { src: 'https://kaylee-staging.test-socrata.com/dataset/Annotations/29z7-rtcv/embed?width=429&height=350'},
    { src: 'https://kaylee-staging.test-socrata.com/dataset/Column-Chart-States-Cases/8uic-976j/embed?width=429&height=350'},
    { text: '<h1>Your Great Story Title</h1>' },
    { text: 'div><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</i>'}
  ]
  return _.map(_.range(0, 8), function(item, i) {
    var y = Math.ceil(Math.random() * 4) + 4;
    return {
      x: Math.round(Math.random() * 5) * 4,
      y: Math.floor(i / 6) * y,
      w: 4,
      h: 9,
      i: i.toString(),
      static: false,
      src: VISUALITZATIONS[i].src,
      text: VISUALITZATIONS[i].text
    };
  });
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ResponsiveLayout name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})