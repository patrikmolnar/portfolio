import React from "react"
import { Grid, Container, Typography } from "@material-ui/core"

const Footer = () => {
  return (
    <Grid
      container
      style={{
        backgroundColor: "#fff",
        minHeight: 100,
      }}
      justify={"center"}
      alignItems={"center"}
    >
      <Container maxWidth="lg">
        <Grid justify="center" container>
          <Grid item xl={12}>
            <Typography
              style={{ fontWeight: "bold", color: "#4a4c4c" }}
              variant="body1"
            >
              <span role="img" aria-label="heart">
                built with ❤️ by Patrik Molnar
              </span>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  )
}

export default Footer
