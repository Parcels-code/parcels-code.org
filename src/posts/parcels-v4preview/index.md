---
title: 'Parcels v4.0 is available! 🚀'
date: '2026-08-01'
authors:
  - name: Erik van Sebille
    github: erikvansebille
  - name: Nick Hodgskin
    github: VeckotheGecko
  - name: Joe Schoonover
    github: fluidnumericsJoe
summary: 'Parcels v4.0 is now available, bringing exciting new features and improvements to the Parcels framework.'
---

We are very excited to announce that Parcels v4.0 is now available for performing Lagrangian simulations in hydrodynamic flows. Parcels v4 is a complete redesign of the [Parcels code](https://parcels-code.org) and is designed to be more flexible and extensible than previous versions.

With this release - Parcels is a pure Python package that leverages the full power of the [Pangeo ecosystem](https://pangeo.io/) of geoscience python tools such as Xarray, Dask and Zarr. Particle advection and interpolation are now vectorised operations, which improves performance and makes [particle-particle interactions](https://docs.parcels-code.org/en/main/user_guide/examples/tutorial_interaction.html) easier to implement.

Key improvements include:

1. Support for [unstructured grids](https://docs.parcels-code.org/en/main/user_guide/examples/explanation_grids.html).
2. More flexibility in writing Kernels (including [using python functions in Kernels](https://docs.parcels-code.org/en/main/user_guide/examples/tutorial_gsw_density.html) and support for writing output in a Kernel)
3. Support for [user-defined interpolators](https://docs.parcels-code.org/en/main/user_guide/examples/explanation_interpolation.html).
4. More robust and flexible support for [nested grids](https://docs.parcels-code.org/en/main/user_guide/examples/tutorial_nestedgrids.html).

We have also changed the [output format to Parquet](https://docs.parcels-code.org/en/main/getting_started/tutorial_output.html#reading-the-output-file), which is a tabular format more suited for writing and reading trajectory data.

See the full migration guide from Parcels v3 to v4 [here](https://docs.parcels-code.org/en/main/user_guide/v4-migration.html).

Note that Parcels v4.0 is an early release to gather user feedback and should not be considered stable. We welcome feedback from the community, and encourage users to try out the new version and [report any issues or suggestions](https://github.com/Parcels-Code/parcels/issues) or connect with us on our [Zulip CLAM community](https://clam-community.github.io).

Once we've incorporated this feedback, improved performance, and implemented a few outstanding features, we aim to release a stable version of Parcels.

<div style={{ fontSize: '0.8em', opacity: 0.6 }}>
  Funded by the [WarmWorld ELPHE
  project](https://www.geomar.de/en/research/ongoing-projects/project-details/prj/376612?cHash=449a07d057ea0d890287bd2b8ca26e8b)
  funded by the German Federal Ministry for Research, Technology and Space
  (BMFTR) and the [NWO Vici project “Tracing Marine Macroplastics by Unraveling
  the Ocean’s Multiscale Transport
  Processes”](https://www.nwo.nl/en/projects/vic222025), the development of
  Parcels v4 started in September 2025 and was a collaboration between the
  [GEOMAR Helmholtz Centre for Ocean Research Kiel](https://www.geomar.de/en/),
  [FluidNumerics](https://www.fluidnumerics.com/) and the [University of
  Utrecht](https://www.uu.nl/en) in the Netherlands. The development was led by
  Nick Hodgskin, Joe Schoonover and Erik van Sebille, with contributions from
  many others, including Willi Rath, Daniel Lizarbe, Reint Fischer, and Michael
  Denes.
</div>
