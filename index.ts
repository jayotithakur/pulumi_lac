import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";


// Create an AWS EC2 instance
const ubuntuInstance = new aws.ec2.Instance("ubuntu-instance", {
  ami: "ami-024e6efaf93d85776", // Specify the desired Ubuntu AMI ID
  instanceType: "t2.micro",
  tags: {
    Name: "ubuntu-pulumi",
  },
});

// Export the instance's public IP address
export const publicIp = ubuntuInstance.publicIp;
