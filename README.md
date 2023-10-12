# Grafana data source plugin template

This template is a starting point for building a Data Source Plugin for Grafana.

## What are Grafana data source plugins?

Grafana supports a wide range of data sources, including Prometheus, MySQL, and even Datadog. There’s a good chance you can already visualize metrics from the systems you have set up. In some cases, though, you already have an in-house metrics solution that you’d like to add to your Grafana dashboards. Grafana Data Source Plugins enables integrating such solutions with Grafana.

## Getting started

### Backend

1. Update [Grafana plugin SDK for Go](https://grafana.com/docs/grafana/latest/developers/plugins/backend/grafana-plugin-sdk-for-go/) dependency to the latest minor version:

   ```bash
   go get -u github.com/grafana/grafana-plugin-sdk-go
   go mod tidy
   ```

   Note : Make sure you have go version "go version go1.20.5"

2. Build backend plugin binaries for Linux, Windows and Darwin:

   ```bash
   mage -v
   ```

3. List all available Mage targets for additional commands:

   ```bash
   mage -l
   ```
### Frontend

1. Install dependencies

   ```bash
   yarn install
   ```

2. Build plugin in development mode and run in watch mode

   ```bash
   yarn dev
   ```

3. Build plugin in production mode

   ```bash
   yarn build
   ```

4. Run the tests (using Jest)

   ```bash
   # Runs the tests and watches for changes, requires git init first
   yarn test
   
   # Exits after running all the tests
   yarn test:ci
   ```

5. Spin up a Grafana instance and run the plugin inside it (using Docker)

   ```bash
   yarn server
   ```

6. Run the E2E tests (using Cypress)

   ```bash
   # Spins up a Grafana instance first that we tests against 
   yarn server
   
   # Starts the tests
   yarn e2e
   ```

7. Run the linter

   ```bash
   yarn lint
   
   # or

   yarn lint:fix
   ```


# Using your plugin in optimax

--> After successfully compiling the front-end and back-end of the plugin using the commands mentioned above we can use the        plugin in optimax

--> To use the plugin in optimax, we should first create an folder with name 'Optimax-Streaming-Datasource' in the path "/var/don/grafana" and place the dist file of the plugin inside the folder

--> Do "compose up" from supervisor to upload the plugin.

--> we need to remove the binary files extensions inside the dist folder, to do that please excute the follwing commands in terminal

   1. cd /var/don/grafana/plugins/Optimax-Streaming-Datasource/dist"
   2. sudo su
   3. "chmod 0755 go_plugin_build_manifest gpx_backend_datasource_darwin_amd64 gpx_backend_datasource_darwin_arm64    gpx_backend_datasource_linux_amd64 gpx_backend_datasource_linux_arm gpx_backend_datasource_linux_arm64 gpx_backend_datasource_windows_amd64.exe"

--> After running the follwoing commands restart the "grafana" container.

--> Now go to settings inside grafana and click on "Add Datasource" and you can see the name of plugin in the list 'OPTIMAX STREAMING DATASOURCE'

--> upon selcting the data source it will ask for the configurations 
    1. add your base address of the VM in "url" section (exmple:"https://127.0.0.1:10000")
    2. enable "Skip TLS Verify".
    3. finally click on "Save and test" button.

--> Now you can create dashboards and alerts using this plugin.    
    


