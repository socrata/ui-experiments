import { Responsive, WidthProvider } from 'react-grid-layout';
import * as React from 'react';
import _ from "lodash";
import * as ReactDOM from 'react-dom';
import { BASIC_LAYOUT } from './basic-layout';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

type Props = {
  className: string,
  cols: {string: number}
  rowHeight: number,
  draggableHandle: string,
  verticalCompact: boolean,
  compactType: string
};

type State = {
  currentBreakpoint: string,
  mounted: boolean,
  layouts: {lg: Layout}
};

type Layout = LayoutItem[];
type LayoutItem = {
  i: string,
  text: string,
  src: string,
  y: number,
  x: number,
  h: number,
  w: number
}

export default class ResponsiveLayout extends React.Component<Props, State> {
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
    layouts: { lg: BASIC_LAYOUT }
  };

  componentDidMount() {
    this.setState({ mounted: true });
  }

  generateDOM() {
    return _.map(this.state.layouts.lg, function(item: LayoutItem, i: number) {
      return (
        <div key={i}>
          <div className="drag-handle"></div>
          {item.src && <iframe src={item.src} width="429" height="350" style={{border: 0, padding: 0, margin: 0}}></iframe>}
          {item.text && <div dangerouslySetInnerHTML={{ __html: item.text }}></div>}
        </div>
      );
    });
  }

  onBreakpointChange = (breakpoint: string) => {
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

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ResponsiveLayout compactType={document.getElementById('story-container').className}/>,
    document.getElementById('story-container'),
  )
})