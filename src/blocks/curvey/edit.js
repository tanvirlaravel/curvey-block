/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, ToggleControl } from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import metadata from "./block.json";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { enableTopCurve } = attributes;
	return (
		<>
			<p {...useBlockProps()}>
				{__("Curvey – hello from the editor!", metadata.textdomain)}
			</p>

			<InspectorControls>
				<PanelBody
					title={__("Top Curve", metadata.textdomain)}
					initialOpen={true}
				>
					<div style={{ display: "flex" }}>
						<ToggleControl
							onChange={(isChecked) =>
								setAttributes({ enableTopCurve: isChecked })
							}
							checked={enableTopCurve}
						/>
						<span>{__("Enable top curve", metadata.textdomain)}</span>
					</div>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
