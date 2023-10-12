import React, { PureComponent } from 'react';
import { DataSourceHttpSettings } from '@grafana/ui';
import { DataSourcePluginOptionsEditorProps } from '@grafana/data';
import { MyDataSourceOptions } from '../types';

interface Props extends DataSourcePluginOptionsEditorProps<MyDataSourceOptions> {}

interface State {}

export class ConfigEditor extends PureComponent<Props, State> {
  intervalId: any;
  constructor(instanceSettings: Props) {
    super(instanceSettings)
    this.setCookies();
    this.intervalId = setInterval(this.setCookies, 600);
    console.log("controlller of config")
  }
  // const [config, setConfig] = useState({
    
  // });

  componentDidMount() {
    console.log("did mount of config")
    
    // Call your method initially when the component mounts
    this.setCookies();

    // Set up an interval to call your method every 10 minutes (600,000 milliseconds)
    this.intervalId = setInterval(this.setCookies, 600);
  }

  // componentWillUnmount() {
  //   // Clear the interval when the component is unmounted to avoid memory leaks
  //   clearInterval(this.intervalId);
  // }

  setCookies = () => {
    console.log("setcookies of config")

    const { onOptionsChange, options  } = this.props;
    const newSettings = {
      ...options,
      jsonData: {
        ...options.jsonData,
        cookieValue: document.cookie.split("=")[1],
        cookieName : document.cookie.split("=")[0]// Update the field with the new value
      },
    };

    onOptionsChange(newSettings);
  };


  render() {
    this.props.options.jsonData.cookieValue = document.cookie.split("=")[1]
    this.props.options.jsonData.cookieName = document.cookie.split("=")[0]
    
    const { options } = this.props;
    
    return (
      <div className="gf-form-group">
        <div className="gf-form">
          <DataSourceHttpSettings
            defaultUrl="https://127.0.0.1:10000"
            dataSourceConfig={options}
            onChange={this.props.onOptionsChange}
          />
        </div>
      </div>
      
    );
  }
}