/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { CommandsRegistry } from 'vs/platform/commands/common/commands';
import { ServicesAccessor } from "vs/platform/instantiation/common/instantiation";

CommandsRegistry.registerCommand({
	id: 'webide.redirectUrl',
	handler: (accessor: ServicesAccessor, url: string) => {
		top && url && (top.location.href = url)
	}
});
