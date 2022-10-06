import { BitrixVue } from 'ui.vue';
import { FileIcon } from 'ui.icons.generator';

export const FileIconComponent = BitrixVue.localComponent('ui.uploader.file-icon', {
	props: {
		name: {
			type: String,
		},
		type: {
			type: String,
		},
		color: {
			type: String,
		},
		size: {
			type: Number,
			default: 36,
		},
	},
	mounted()
	{
		const icon = new FileIcon({
			name: this.name,
			fileType: this.type,
			color: this.color,
			size: this.size,
		});

		icon.renderTo(this.$el);
	},
	template: '<span></span>',
});
