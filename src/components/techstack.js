import React from "react"
import { Chip } from "@material-ui/core"
import { makeStyles, createStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme =>
  createStyles({
    chip: {
      margin: 3,
      padding: 3,
    },
  })
)

const TechStack = ({ key, tech }) => {
  const classes = useStyles()

  return (
    <Chip
      key={key}
      variant="outlined"
      size="small"
      label={tech}
      className={classes.chip}
    />
  )
}

export default TechStack
