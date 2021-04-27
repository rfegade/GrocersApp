// ## Value Provider
// to use a static data or function as a service - we are usingit to get a API endpoint

import { InjectionToken } from '@angular/core';
import {IAppConfig} from '../material-shared/IAppConfig';

export const APP_CONFIG = new InjectionToken<IAppConfig>('config');