wp.blocks.registerBlockType("ourplugin/are-you-paying-attention", {
  title: "Are You Paying attention?",
  icon: "smiley",
  category: "common",
  attributes: {
    // skyColor: { type: "string", source: "text", selector: ".skyColor" },
    // grassColor: { type: "string", source: "text", selector: ".grassColor" },
    skyColor: { type: "string" },
    grassColor: { type: "string" },
  },
  edit: function (props) {
    function updateSkyColor(event) {
      props.setAttributes({ skyColor: event.target.value });
    }
    function updateGrassColor(event) {
      props.setAttributes({ grassColor: event.target.value });
    }
    return (
      <div>
        <input
          type="text"
          placeholder="sky color"
          value={props.attributes.skyColor}
          onChange={updateSkyColor}
        ></input>
        <input
          type="text"
          placeholder="grass color"
          value={props.attributes.grassColor}
          onChange={updateGrassColor}
        ></input>
      </div>
    );
  },
  save: function (props) {
    return (
      <h3>
        Today the sky is
        <span className="skyColor">{props.attributes.skyColor}</span> and the
        grass is{" "}
        <span className="grassColor">{props.attributes.grassColor}</span>.
      </h3>
    );
  },
  deprecated: [
    {
      attributes: {
        skyColor: { type: "string" },
        grassColor: { type: "string" },
      },
      save: function (props) {
        return (
          <p>
            Today the sky is{" "}
            <span className="skyColor">{props.attributes.skyColor}</span> and
            the grass is{" "}
            <span className="grassColor">{props.attributes.grassColor}</span>.
          </p>
        );
      },
    },
  ],
});
