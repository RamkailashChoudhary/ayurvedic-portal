import React, { useState } from "react";
import {Grid,LinearProgress,Select,OutlinedInput,MenuItem,} from "@material-ui/core";
import PageTitle from '../../core/PageTitle';
import ProductCategories from "../home/ProductCategories";
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ProductHomeComponent from "./ProductHomeComponent";
import ProductHome2Component from "./ProductHome2Component";
import ProductWorkComponent from "./ProductWorkComponent";

export default function LandingComponent(props) {

    return (
        <React.Fragment>
         <PageTitle />
         <ProductHomeComponent />
         <ProductHome2Component />
         <ProductCategories />
         <ProductWorkComponent />
      </React.Fragment>
       );
  }
