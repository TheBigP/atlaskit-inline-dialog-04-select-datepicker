// @flow
import React, { Component } from "react";
import Select from "@atlaskit/select";
import Button from "@atlaskit/button";
import { DatePicker } from "@atlaskit/datetime-picker";
import InlineDialog from "@atlaskit/inline-dialog";
import { Checkbox } from "@atlaskit/checkbox";

type State = {
  isDialogOpen: boolean
};

const options = [
  { label: "Adelaide", value: "adelaide" },
  { label: "Brisbane", value: "brisbane" },
  { label: "Canberra", value: "canberra" },
  { label: "Darwin", value: "darwin" },
  { label: "Hobart", value: "hobart" },
  { label: "Melbourne", value: "melbourne" },
  { label: "Perth", value: "perth" },
  { label: "Sydney", value: "sydney" },
  { label: "Adelaide", value: "adelaide" },
  { label: "Brisbane", value: "brisbane" },
  { label: "Canberra", value: "canberra" },
  { label: "Darwin", value: "darwin" },
  { label: "Hobart", value: "hobart" },
  { label: "Melbourne", value: "melbourne" },
  { label: "Perth", value: "perth" },
  { label: "Adelaide", value: "adelaide" },
  { label: "Brisbane", value: "brisbane" },
  { label: "Canberra", value: "canberra" },
  { label: "Darwin", value: "darwin" },
  { label: "Hobart", value: "hobart" },
  { label: "Melbourne", value: "melbourne" },
  { label: "Perth", value: "perth" },
  { label: "Sydney", value: "sydney" }
];

export default class SingleSelectDialog extends Component<{}, State> {
  state = {
    isDialogOpen: true,
    onChangeResult: "Check & Uncheck to trigger onChange",
    list: [],
  };

  onChange = (event, data) => {
    this.state.list = event.target.checked ? [...this.state.list, data] : this.state.list.filter(v => v.value !== data.value);
  };
  openDialog = () => {
    this.setState({ isDialogOpen: true });
  };
  dialogClosed = () => {
    this.setState(prevState => ({ isDialogOpen: !prevState.isDialogOpen }));
  };
  change_text = (event) => {
    
  }

  render() {
    const content = (
      <div style={{ width: "300px" }}>
        <div>
          <h1>Columns</h1>
        </div>
        <div>
          <input placeholder="Search" type="text" onChange={this.change_text} ref="search" />
        </div>
        <p style={{ overflow: 'auto' , height: "200px"}}>
          {options.map(v => (
            <Checkbox
              value={v.value}
              label={v.label}
              onChange={e => this.onChange(e, v)}
              name="checkbox-basic"
            />
          ))}
        </p>
        <p>
          <Button onClick={this.dialogClosed}>OK</Button>
          <Button onClick={this.dialogClosed}>Cancel</Button>
        </p>
      </div>
    );

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <div>
          <InlineDialog
            content={content}
            isOpen={this.state.isDialogOpen}
            onClose={this.dialogClosed}
            placement="bottom-end"
          >
            <Button
              onClick={this.openDialog}
              isDisabled={this.state.isDialogOpen}
            >
              Open Dialog
            </Button>
          </InlineDialog>
        </div>
      </div>
    );
  }
}
