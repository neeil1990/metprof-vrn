import {Loc, Tag, Type, Dom} from 'main.core';
import {Button, ButtonColor} from 'ui.buttons';
import {PopupMenu, Menu} from 'main.popup';
import {Content} from '../content';
import {CanvasWrapper} from '../../canvas-wrapper/canvas-wrapper';

import './css/style.css';

export class PhotoContent extends Content
{
	constructor(options)
	{
		super(options);
		this.setEventNamespace('BX.UI.SignUp.Content.PhotoContent');
	}

	getTakePhotoButton(): Button
	{
		return this.cache.remember('takePhotoButton', () => {
			return new Button({
				text: Loc.getMessage('UI_SIGN_UP_TAKE_SIGN_PHOTO'),
				color: ButtonColor.LIGHT_BORDER,
				round: true,
				noCaps: true,
				className: 'ui-sign-up-special-mobile-btn',
			});
		});
	}

	getUploadPhoto(): Button
	{
		return this.cache.remember('uploadPhoto', () => {
			return new Button({
				text: Loc.getMessage('UI_SIGN_UP_UPLOAD_SIGN_PHOTO'),
				color: ButtonColor.LIGHT_BORDER,
				round: true,
				noCaps: true,
				className: 'ui-sign-up-special-mobile-btn',
				onclick: this.onUploadPhotoClick.bind(this),
			});
		});
	}

	getFileInput(): HTMLInputElement
	{
		return this.cache.remember('fileInput', () => {
			return Tag.render`
				<input hidden type="file" onchange="${this.onFileChange.bind(this)}" accept="image/*">
			`;
		});
	}

	onUploadPhotoClick()
	{
		this.getFileInput().click();
	}

	onFileChange(event: Event)
	{
		const [file: File] = event.target.files;
		if (Type.isFile(file))
		{
			Dom.replace(this.getButtonsLayout(), this.getPreviewLayout());

			void this.getCanvas().renderImage(file);
		}
	}

	getButtonsLayout(): HTMLDivElement
	{
		return this.cache.remember('buttonsLayout', () => {
			return Tag.render`
				<div class="ui-sign-up-content-photo-buttons">
					<div class="ui-sign-up-content-photo-button-wrapper">
						${this.getOptions().mode !== 'desktop' ? this.getTakePhotoButton().render() : ''}
					</div>
					<div class="ui-sign-up-content-photo-button-wrapper">
						${this.getUploadPhoto().render()}
					</div>
				</div>
			`;
		});
	}

	getCanvas(): CanvasWrapper
	{
		return this.cache.remember('canvas', () => {
			return new CanvasWrapper({});
		});
	}

	getMoreButton(): HTMLDivElement
	{
		return this.cache.remember('moreButton', () => {
			return Tag.render`
				<div 
					class="ui-sign-up-content-photo-more-button"
					onclick="${this.onMoreButtonClick.bind(this)}"
				></div>
			`;
		});
	}

	onMoreButtonClick(event: MouseEvent)
	{
		event.preventDefault();

		this.getMoreMenu().show();
	}

	getMoreMenu(): Menu
	{
		return this.cache.remember('moreMenu', () => {
			return PopupMenu.create({
				id: 'moreMenu',
				bindElement: this.getMoreButton(),
				items: [
					{
						id: 'upload',
						text: Loc.getMessage('UI_SIGN_UP_UPLOAD_NEW'),
						onclick: this.onUploadPhotoClick.bind(this),
					},
				],
			});
		});
	}

	getPreviewLayout(): HTMLDivElement
	{
		return this.cache.remember('previewLayout', () => {
			return Tag.render`
				<div class="ui-sign-up-content-photo-preview">
					${this.getCanvas().getLayout()}
					${this.getMoreButton()}
				</div>
			`;
		});
	}

	getLayout(): HTMLDivElement
	{
		return this.cache.remember('layout', () => {
			return Tag.render`
				<div class="ui-sign-up-content">
					${this.getButtonsLayout()}
					${this.getFileInput()}
				</div>
			`;
		});
	}
}