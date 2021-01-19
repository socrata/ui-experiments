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

  constructor(props) {
    super(props);
    // this.myRef = React.createRef();
  }

  state = {
    currentBreakpoint: "lg",
    mounted: false,
    layouts: { lg: BASIC_LAYOUT }
  };

  componentDidMount() {
    this.setState({ mounted: true });
  }

  // componentDidUpdate() {
  //   console.log('component updated');
  //   // const height = this.myRef.current.offsetHeight;
  //   const height = document.querySelector('.paragraph').offsetHeight;

  //   const newRowHeight = Math.ceil(height / 40) + 1;

  //   if (this.state.layouts.lg[2].h !== newRowHeight) {
  //     // const newLayout = this.state.layouts.lg
  //     const layout = this.state.layouts.lg.map(item => ({ ...item }));

  //     layout[2].h = newRowHeight;

  //     this.setState({ layouts : { lg: layout }})
  //   }
  //   console.log(this.state.layouts.lg[2].h)
  // }

  generateDOM() {
    return _.map(this.state.layouts.lg, function(item: LayoutItem, i: number) {
      return (
        <div key={i}>
          <div className="drag-handle"></div>
          {item.src && <iframe src={item.src} width="429" height="350" style={{border: 0, padding: 0, margin: 0}}></iframe>}
          {item.text && <div dangerouslySetInnerHTML={{ __html: item.text }}></div>}
        </div>
      );
    }.bind(this));
  }

  onBreakpointChange = (breakpoint: string) => {
    this.setState({
      currentBreakpoint: breakpoint
    });
  };

  onWidthChange = (containerWidth: number, margin: [number, number], cols: number, containerPadding: [number, number]) => {
    console.log('component updated');
    // const height = this.myRef.current.offsetHeight;
    const height = document.querySelector('.paragraph').offsetHeight;

    const newRowHeight = Math.ceil(height / 40);

    if (this.state.layouts.lg[2].h !== newRowHeight) {
      // const newLayout = this.state.layouts.lg
      const layout = this.state.layouts.lg.map(item => ({ ...item }));

      layout[2].h = newRowHeight;

      this.setState({ layouts : { lg: layout }})
    }
    console.log(this.state.layouts.lg[2].h)
  }

  render() {
    return (
      <div>
        <ResponsiveReactGridLayout
          {...this.props}
          layouts={this.state.layouts}
          onBreakpointChange={this.onBreakpointChange}
          onWidthChange={this.onWidthChange}

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