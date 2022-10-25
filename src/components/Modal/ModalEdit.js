import { Checkbox, FormControlLabel } from "@mui/material";
import { green, red } from "@mui/material/colors";
import React from "react";
import { useDispatch } from "react-redux";
import { setShowEditEvent } from "../../redux-toolkit/global/globalSlice";
import EventType from "../EventType/EventType";
import Field from "../Field/Field";

const ModalEdit = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col">
      <h4 className="p-3 text-base font-bold modal-title">Edit #1</h4>
      <div className="p-3">
        <Field label="Order" />
        <EventType modal />
        <div className="grid grid-cols-2 gap-x-3">
          <div className="field-time-offset">
            <Field height={40} className="field-time" label="Time Offset" />
          </div>
          <div className="relative">
            <div className="q-field-checkbox">
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: green[800],
                      "&.Mui-checked": {
                        color: green[800],
                      },
                    }}
                  />
                }
                label="Active"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: red.A700,
                      "&.Mui-checked": {
                        color: red.A700,
                      },
                    }}
                  />
                }
                label="Send Input"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end p-3 gap-x-1">
          <button className="flex items-center justify-center btn-checked">
            <i className="text-lg leading-[0px] text-green-500 bi bi-check2"></i>
          </button>
          <button
            onClick={() => dispatch(setShowEditEvent(false))}
            className="flex items-center justify-center btn-close__modal"
          >
            <i className="text-lg leading-[0px] text-white bi bi-x"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
