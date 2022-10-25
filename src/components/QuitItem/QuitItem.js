import React from "react";
import { Checkbox } from "@mui/material";
import { useDispatch } from "react-redux";
import { setShowEditEvent } from "../../redux-toolkit/global/globalSlice";
import Field from "../Field/Field";
import styled from "styled-components";
import EventType from "../EventType/EventType";
const StyledQuitItem = styled.div`
  border: 1px solid ${(props) => props.theme.boderCheckItem};

  min-height: 48px;

  & .control-list {
    display: grid;
    grid-template-columns: 1fr 3fr 2fr 2fr 2fr 1fr;
  }
  .form-label {
    flex-wrap: nowrap;
    display: -webkit-box;
    word-break: break-word;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .form-input:not(:placeholder-shown) + .form-label,
  .form-input:focus + .form-label {
    top: 11px;
  }
  & .event-key-label {
    font-size: 14px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  & .selectbox-input:focus + .event-key-label {
    color: #1976d2;
    font-size: 10px;
    top: 14px;
  }
  //
  .checkbox {
    display: inline-block;
    position: relative;
    /* padding: 20px 0 20px 60px; */
    font-weight: bold;
    cursor: pointer;
  }

  .text {
    display: inline-block;
    transition: transform 100ms cubic-bezier(0.165, 0.84, 0.44, 1);
    user-select: none;
  }

  .checkbox:active .text {
    transform: scale(0.9);
  }

  .checkbox .icon {
    position: absolute;
    height: 26px;
    width: 26px;
    top: 50%;
    left: 0;
    transform: translateY(-50%) rotate(45deg);
    &:hover {
      border-radius: 100rem;
    }
  }

  .checkbox .icon::before,
  .checkbox .icon::after {
    content: "";
    display: block;
    position: absolute;
  }

  .checkbox .icon::before {
    height: 100%;
    width: 100%;
    border-radius: 100%;
    border: 2px solid currentColor;
    background: transparent;
    transition: background 100ms cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .checkbox .icon::after {
    border: 3px solid transparent;
    transition: height 100ms ease-in, width 100ms ease-out 100ms,
      border-color cubic-bezier(0.165, 0.84, 0.44, 1) 100ms 100ms;
    width: 0px;
    height: 0px;
    bottom: 5px;
    left: 8px;
    border-radius: 4px;
    transform-origin: bottom left;
  }

  #checkbox:checked + .checkbox .icon::after {
    width: 8px;
    height: 20px;
    border-right-color: currentColor;
    border-bottom-color: currentColor;
    transition: width 100ms ease-in, height 100ms ease-out 100ms,
      border-color cubic-bezier(0.165, 0.84, 0.44, 1) 100ms;
  }

  #checkbox:checked + .checkbox .icon::before {
    background: #8ac926;
  }
`;
const QuitItem = () => {
  const dispatch = useDispatch();
  return (
    <StyledQuitItem className="p-3 q-item">
      <div className="items-center w-full gap-x-2 control-list ">
        <div>
          <Checkbox
            defaultChecked
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
        <div>
          <EventType />
        </div>
        <div></div>
        <div>
          <Field height={40} className="field-time" label="Time Offset" />
        </div>
        <div className="flex items-center justify-center h-full gap-x-10">
          <div className="flex h-full">
            <input type="checkbox" id="checkbox" hidden />
            <label htmlFor="checkbox" className="checkbox">
              <span className="icon" />
            </label>
          </div>
        </div>
        <div>
          <button
            onClick={() => dispatch(setShowEditEvent(true))}
            className="btn-edit btn btn-primary m-0 flex items-center gap-x-1 bg-[#0077b6] text-xs font-semibold italic text-white  rounded-full "
          >
            <i className="bi text-white leading-[0px] text-sm bi-pencil-fill"></i>
            EDIT
          </button>
        </div>
      </div>
    </StyledQuitItem>
  );
};

export default QuitItem;
