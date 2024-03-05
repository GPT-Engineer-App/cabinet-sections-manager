import React, { useState } from "react";
import { Box, Container, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Button, Alert, AlertIcon, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { FaWarehouse, FaClipboardList, FaDollarSign } from "react-icons/fa";

const Index = () => {
  // State to handle form data and alerts
  const [complaint, setComplaint] = useState("");
  const [isComplaintSubmitted, setComplaintSubmitted] = useState(false);

  // Handlers for complaint form
  const handleComplaintChange = (event) => setComplaint(event.target.value);
  const handleComplaintSubmit = () => {
    if (complaint) {
      setComplaintSubmitted(true);
      // TODO: Implement logic to notify manager for inspection
    }
  };

  return (
    <Container maxW="container.xl">
      <Heading as="h1" size="xl" my={8} textAlign="center">
        Manager's Cabinet
      </Heading>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>
            <FaWarehouse /> Internal Warehouse
          </Tab>
          <Tab>
            <FaClipboardList /> Claims Request
          </Tab>
          <Tab isDisabled>
            <FaDollarSign /> Price Change Request
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text>Form and send kits to the sales warehouse or send items in bulk.</Text>
            {/* TODO: Implement internal warehouse functionality */}
          </TabPanel>
          <TabPanel>
            <Box>
              {isComplaintSubmitted ? (
                <Alert status="success">
                  <AlertIcon />
                  Complaint submitted and pending inspection.
                </Alert>
              ) : (
                <FormControl>
                  <FormLabel htmlFor="complaint">Complaint Details</FormLabel>
                  <Textarea id="complaint" value={complaint} onChange={handleComplaintChange} placeholder="Describe the issue with the stone's volume..." />
                  <Button mt={4} onClick={handleComplaintSubmit} colorScheme="blue">
                    Submit Complaint
                  </Button>
                </FormControl>
              )}
            </Box>
          </TabPanel>
          <TabPanel>
            <Text>Price change requests can only be approved by the director and cerberus.</Text>
            {/* Disabled Tab Content */}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default Index;
